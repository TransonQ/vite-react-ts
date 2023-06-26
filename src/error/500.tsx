import svg500 from '@/assets/svg/500.svg'
import { Page, LegacyCard, EmptyState } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

export const ResponseError = ({ isPage = true }: { isPage: boolean }) => {
  const nav = useNavigate()

  const CardMark = (
    <LegacyCard sectioned>
      <EmptyState
        image={svg500}
        heading="抱歉，服务器出了点问题"
        action={{
          content: '返回主页',
          onAction: () => nav('/'),
        }}
      ></EmptyState>
    </LegacyCard>
  )
  if (isPage) {
    return <Page>{CardMark}</Page>
  } else {
    return <>{CardMark}</>
  }
}
