import Image from 'next/image'
// import myPic from './me.jpg'


function ProfilePic() {
  return (
    <div>
      <Image
        src={"/me_in_public.jpg"}
        alt="my profile pic"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export default ProfilePic;