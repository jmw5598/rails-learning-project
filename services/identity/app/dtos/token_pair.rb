class TokenPair
  attr_reader :access_token, :refresh_token

  def initialize(access_token, refresh_token)
    @access_token = access_token
    @refresh_token = refresh_token
  end
end
