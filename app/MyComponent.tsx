import styles from './MyComponent.module.css'

export type MyComponentProps = {
  children?: React.ReactNode
}

export const MyComponent = () => {
  // Edit the text below to see the bug in action
  // The red text will disappear
  return <div className={styles.text}>MyComponent here</div>
}
