class UserDetails
  attr_reader :id, :name, :username, :email

  def initialize(user)
    @id = user.id
    @name = user.name
    @username = user.username
    @email = user.email
  end
end
