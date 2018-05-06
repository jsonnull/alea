// @flow
import * as React from 'react'
import AvatarEditor from 'react-avatar-editor'
import Button from 'frontend/components/Button'
import { FileInputWrapper, Current } from './styles'

type Props = {
  avatar: ?string,
  updateUserAvatar: (avatar: string) => void
}
type State = {
  isEditing: boolean,
  file: ?string,
  zoom: number
}

class Avatar extends React.Component<Props, State> {
  fileInput = React.createRef()
  imageScale = React.createRef()
  editor = React.createRef()

  state = {
    isEditing: false,
    file: null,
    zoom: 1
  }

  chooseFile = () => {
    const fileInput = this.fileInput.current
    if (!fileInput) {
      return
    }
    fileInput.click()
  }

  cancelEdits = () => {
    this.setState({
      isEditing: false,
      file: null,
      zoom: 1
    })
  }

  saveImage = () => {
    const editor = this.editor.current
    if (!editor) {
      return
    }
    const resizedCanvas = editor.getImageScaledToCanvas()
    const imageUrl = resizedCanvas.toDataURL()

    this.props.updateUserAvatar(imageUrl)

    this.setState({
      isEditing: false,
      file: null,
      zoom: 1
    })
  }

  imageSelected = () => {
    const fileInput = this.fileInput.current
    if (!fileInput) {
      return
    }
    this.setState({
      isEditing: true,
      file: fileInput.files[0]
    })
  }

  updateZoom = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      zoom: Number(e.currentTarget.value)
    })
  }

  render() {
    const { avatar } = this.props
    const { isEditing, file, zoom } = this.state

    if (isEditing) {
      return (
        <div>
          <AvatarEditor
            ref={this.editor}
            image={file}
            width={200}
            height={200}
            border={20}
            color={[127, 127, 127, 0.6]}
            scale={zoom}
          />
          <div>
            <input
              type="range"
              min="1"
              max="6"
              step="0.1"
              value={zoom}
              onChange={this.updateZoom}
            />
          </div>
          <Button onClick={this.saveImage}>Save Picture</Button>{' '}
          <Button red onClick={this.cancelEdits}>
            Cancel
          </Button>
        </div>
      )
    }

    return (
      <div>
        <Current>
          {avatar ? (
            <img src={avatar} />
          ) : (
            "Looks like you don't have an avatar yet. Want to upload one?"
          )}
        </Current>
        <Button onClick={this.chooseFile}>Upload new picture</Button>
        <FileInputWrapper>
          <input
            type="file"
            ref={this.fileInput}
            accept="image/*"
            onInput={this.imageSelected}
            onClick={e => (e.target.value = null)}
          />
        </FileInputWrapper>
      </div>
    )
  }
}

export default Avatar
