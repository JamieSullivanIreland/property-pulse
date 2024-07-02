import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const ShareButton = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLI_DOMAIN}/properties/${property._id}`;

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Share this property
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}
        >
          <FacebookIcon
            size={40}
            round
          />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={[`#${property.type.replace(/\s/g, '')}ForRent`]}
        >
          <TwitterIcon
            size={40}
            round
          />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          quote={property.name}
          seperator=':: '
        >
          <WhatsappIcon
            size={40}
            round
          />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Check out this property listing: ${shareUrl}`}
        >
          <EmailIcon
            size={40}
            round
          />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButton;
