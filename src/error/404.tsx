import svg404 from '@/assets/svg/404.svg'
import { Page, LegacyCard, EmptyState } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

export const NotFound = ({ isPage = true }: { isPage: boolean }) => {
  const nav = useNavigate()

  const CardMark = (
    <LegacyCard sectioned>
      <EmptyState
        image={svg404}
        heading="抱歉，页面不见了～"
        secondaryAction={{
          content: '返回主页',
          onAction: () => nav('/'),
        }}
        action={{
          content: '重新加载此页面',
          onAction: () => window.location.reload(),
        }}
      >
        <p>
          {
            '当前页面存在技术问题，请尝试重新加载此页面或转到另一个页面。如果这不起作用，请寻求项目负责人员协助处理此问题'
          }
        </p>
      </EmptyState>
    </LegacyCard>
  )

  if (isPage) {
    return <Page>{CardMark}</Page>
  } else {
    return <>{CardMark}</>
  }
}
