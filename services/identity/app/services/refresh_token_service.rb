class RefreshTokenService
  require 'securerandom'

  def validate_token(user_id, token)
    RefreshToken.find_by(users_id: user_id, token: token, is_blacklisted: false)
  end

  def find_or_create(user_id)
    refresh_token = RefreshToken.find_by(users_id: user_id, is_blacklisted: false)
    return refresh_token if refresh_token.present?
    refresh_token = RefreshToken.new( token: SecureRandom.uuid, is_blacklisted: false, users_id: user_id );
    refresh_token.save() ? refresh_token : nil
  end
end
