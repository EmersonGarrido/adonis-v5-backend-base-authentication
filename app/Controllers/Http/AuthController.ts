import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const loginUserSchema = schema.create({
      email: schema.string([rules.email()]),
      password: schema.string([rules.minLength(4)]),
    });
    try {
      const payload = await request.validate({
        schema: loginUserSchema,
      });

      const user = await User.query()
        .where('email', payload.email)
        .firstOrFail();

      const token = await auth.use('api_user').login(user, {
        expiresIn: '7days',
      })
      return response.status(200).json({ accessToken: token.toJSON(), user })
    } catch {
      return response.status(401).json({ msg: 'Invalid credentials' })
    }
  }

  public async store({ request }: HttpContextContract) {
    const { fullName, displayName, email, password, phone_number } = request.only(['fullName', 'displayName', 'email', 'password', 'phone_number']);

    const user = await User.create({
      fullName: fullName,
      displayName: displayName,
      email: email,
      password: password,
      phoneNumber: phone_number,
    });

    return {
      success: true,
      user,
    }
  }

  public async session({ auth }: HttpContextContract) {
    try {
      const userId: any = auth.user?.id
      const user = await User.query().where('id', userId);

      return user
    } catch {
      return {
        status: 404,
        message: 'User not found.',
      }
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api_user').revoke()
    auth.use('api_user').isLoggedOut

    return {
      status: 200,
      message: 'Logout out successfully.',
    }
  }
}
