function LocalizedUserBadge () {
  return (
    <WithLocalization>
      {(localization) => (
        <WithUser>
          {(user) => (
            <h1>
              {localization.get('user_greeting', { name: user.name })}
            </h1>
          )}
        </WithUser>
      )}
    </WithLocalization>
  )
}
