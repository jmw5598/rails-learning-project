class AuthenticatedUser
  attr_reader :user, :tokens, :status 

  def initialize(user, tokens, status)
    @user = user
    @tokens = tokens
    @status = status
  end
end
