import { AuthConfig } from '@ioc:Adonis/Addons/Auth'
const authConfig: AuthConfig = {
  guard: 'api_user',
  guards: {
    api_user: {
      driver: 'oat',
      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['email'],
        model: () => import('App/Models/user'),
      },
      tokenProvider: {
        driver: 'database',
        table: 'api_tokens',
        foreignKey: 'user_id',
      },
     
    },
  },
}

export default authConfig
