import {Component, ReactNode} from "react";

interface Props {
  name: string
  age: number
}
interface ReturnProps extends Props{
  friend: string
}
interface State {
  readonly message: string
}
class About extends Component<Props, State,ReturnProps> {
  state = {
    message: 'hello class component'
  }
  // constructor(props: Props) {
  //   super(props);
  //
  //   this.state = {
  //     message:  'Hello'
  //   }
  // }
  /**
   * @description 第三个泛型参数
   */
  // getSnapshotBeforeUpdate() {
  //   return {
  //     name: '李四',
  //     age: 12,
  //     friend: '王五'
  //   }
  // }

  render(): ReactNode {
    return (
      <div>
        About{this.props.name} {this.state.message}
      </div>
    )
  }
}
export default About;

