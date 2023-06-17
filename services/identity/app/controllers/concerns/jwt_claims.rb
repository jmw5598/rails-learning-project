module JwtClaims
  extend ActiveSupport::Concern

  # Creates jwt claims from user object
  def jwt_claims_from_user(user)
    { 
      user_id: user.id,
      sub: user.username,
      iat: Time.now.to_i
    }
  end
end
