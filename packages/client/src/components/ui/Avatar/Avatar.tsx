interface AvatarProps {
  className: string,
  src: string,
}

const Avatar = (props: AvatarProps) => {
  return (
    <div>
      <label htmlFor='avatar-input'>
        <img id='avatar' className={props.className} src={props.src} alt='user avatar' />
      </label>

      <input id='avatar-input' type='file'/>
    </div>
  );
}

export default Avatar;
