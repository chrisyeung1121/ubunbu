import Image from 'next/image'
import myPic from './me.jpg'


function ProfilePic() {
  return (
    <div>
      <Image
        src={myPic}
        alt="my profile pic"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export default ProfilePic;