import Image from 'next/image';

const PropertyImages = ({ images }) => {
  return (
    <section className='bg-blue-50 p-4'>
      <div className='container mx-auto'>
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=''
            className='object-cover h-[400px] mx-auto rounded-xl'
            width={0}
            height={0}
            sizes='100vw'
            priority
          />
        ) : (
          <div className='grid gri-cols-2 gap-4'>
            {images.map((image, i) => (
              <div
                key={i}
                className={`${images.length === 3 && i == 2 ? 'col-span-2' : 'col-span-1'}`}
              >
                <Image
                  src={images[i]}
                  alt=''
                  className='object-cover h-[400px] w-full rounded-xl'
                  width={0}
                  height={0}
                  sizes='100vw'
                  priority
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
