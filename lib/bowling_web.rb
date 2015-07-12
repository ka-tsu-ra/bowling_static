require 'sinatra/base'

class BowlingWeb < Sinatra::Base

  enable :sessions

  set :views, proc { File.join(root, '..', 'views') }
  set :public_folder, proc { File.join(root, '..', 'public') }

  get '/' do
    redirect '/start'
  end

  get '/start' do
    erb :'start'
  end
  # start the server if ruby file executed directly
  run! if app_file == $0
end
