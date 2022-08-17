import user from 'App/Models/user'
declare module '@ioc:Adonis/Addons/Auth' {

  interface ProvidersList {
    user: {
      implementation: LucidProviderContract<typeof user>
      config: LucidProviderConfig<typeof user>
    }
  }

  interface GuardsList {
    api_user: {
      implementation: OATGuardContract<'user', 'api_user'>
      config: OATGuardConfig<'user'>
    }
  }
}
