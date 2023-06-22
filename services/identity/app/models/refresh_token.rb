class RefreshToken < ApplicationRecord
  belongs_to :users, class_name: 'User'
end
