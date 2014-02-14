require 'sinatra'

get '/' do
  greeting = 'Happy Hackentine\'s Day!'
  erb :index, :locals => {:greeting => greeting}
end

get '/:name' do
  name = params[:name] || 'Nobody'
  greeting = 'Happy Hackentine\'s Day, ' + name + '!'
  erb :index, :locals => {:greeting => greeting}
end
