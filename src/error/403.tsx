import svg403 from '@/assets/svg/403.svg'
import { Page, LegacyCard, EmptyState } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

export const NoPermission = ({ isPage = true }: { isPage: boolean }) => {
  const nav = useNavigate()

  const CardMark = (
    <LegacyCard sectioned>
      <EmptyState
        image={svg403}
        heading="对不起，你没有访问此页面的权限"
        action={{
          content: '返回',
          onAction: () => nav(-1),
        }}
      >
        <p>{'对此有任何疑问，可以随时咨询我们的项目负责人员。'}</p>
      </EmptyState>
    </LegacyCard>
  )

  if (isPage) {
    return <Page>{CardMark}</Page>
  } else {
    return <>{CardMark}</>
  }
}
