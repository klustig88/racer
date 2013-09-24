class User < ActiveRecord::Base
  validates :name, uniqueness: true
  # Remember to create a migration!
end
