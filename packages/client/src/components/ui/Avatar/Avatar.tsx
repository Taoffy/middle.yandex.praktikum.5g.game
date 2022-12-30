import './Avatar.css'

interface AvatarProps {
  className?: string,
  src: string,
}

function Avatar({className, src, ...props}: AvatarProps) {
  return (
    <img className={'avatar ' + (className ? className : '')} src={src} alt='user avatar' />
  );
}

export default Avatar;
