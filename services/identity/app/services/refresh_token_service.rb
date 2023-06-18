class RefreshTokenService
  def validate_token(user_id, token)
    refresh_token = RefreshToken.find_by(users_id: user_id, is_blacklisted: false)
    refresh_token.present?
  end

  def find_or_generate(user_id)
    refresh_token = RefreshToken.find_by(users_id: user_id, is_blacklisted: false)

    return refresh_token if refresh_token.present?
    # Else create new fresh tokena d return it.
    # new_refresh_token = RefreshToken.new(:user)

    { token: "asjdfkljaskldjflasdf" }

  end
end
