const ShoeCard = ({imgUrl , changeBigShoeImage , bigShoeImage}) => {
  return (
    <div className={`border-2 rounded-xl  ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' :'border-transparent'} cursor-pointer justify-center max-sm:flex-1`}
        onClick={()=>{
            if(bigShoeImage!=imgUrl.bigShoe){
                changeBigShoeImage(imgUrl.bigShoe);
            }
        }}
        >
            <div className="flex justify-center  items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgUrl.thumbnail}
                    alt="Shoe Collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
    </div>
  )
}

export default ShoeCard
