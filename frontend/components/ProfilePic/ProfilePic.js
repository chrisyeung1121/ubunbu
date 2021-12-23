import Image from 'next/image'
import myPic from './me.jpg'

function ProfilePic() {
  return (
    <div>
      <Image src={myPic} alt="my profile pic" />
    </div>
  );
}

export default ProfilePic;