import styles from './SafeHtml.module.css'
interface SafeHtmlProps {
  className?: string
  content: string | undefined
}
const SafeHtml = ({ className, content }: SafeHtmlProps) => {
  return (
    <div
      className={`${styles.htmlContent} ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: content ?? '' }}
    />
  )
}

export default SafeHtml
