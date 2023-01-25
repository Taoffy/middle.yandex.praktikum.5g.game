import CHANGE_AVATAR from '../../actions/user/avatarActions'

function avatarActionCreator(value) {
    return {
      type: CHANGE_AVATAR,
      value: value,
    }
}

export default avatarActionCreator;
