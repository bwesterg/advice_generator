class AdviceController < ApplicationController
    def index
      
        response = RestClient.get "https://api.kanye.rest/"
        result = JSON.parse(response)
        api_kanye = result["quote"]
        render json: api_kanye
        
    end
end
