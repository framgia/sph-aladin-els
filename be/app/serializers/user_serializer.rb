class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :remember_created_at, :lastname, :firstname
end
