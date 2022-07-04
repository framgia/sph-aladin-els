class UserSerializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :email, :lastname, :firstname, :username

end
