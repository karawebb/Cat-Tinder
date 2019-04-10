class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
  end

  def create
   cat = Cat.create(cat_params)
   if cat.valid?
     render json: cat
    else
      render json: cat.errors, status: :unprocessable_entity
    end
 end

    def update
        cat = Cat.find(params[:id])
        cat.update(cat_params)
        p cat.errors.full_messages
        allCats = Cat.all
            render json: allCats
    end

 def destroy
     cat = Cat.destroy(params[:id])
     allCats= Cat.all
         render json: allCats
    end

 private
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end
end
