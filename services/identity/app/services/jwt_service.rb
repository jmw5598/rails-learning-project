require "jwt"

class JwtService
  SECRET_KEY = Rails.application.secret_key_base

  def encode_token(payload, exp = 7.days.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def decode_token(token, validate = true)
    decoded = JWT.decode(token, SECRET_KEY, validate)
    HashWithIndifferentAccess.new decoded
  end

  # Creates jwt claims from user object
  def claims_from_user(user)
    { 
      user_id: user.id,
      sub: user.username,
      iat: Time.zone.now.to_i
    }
  end  
end
