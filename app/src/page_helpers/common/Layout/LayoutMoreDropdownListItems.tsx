import DropdownButtonListItem from '@lyra/ui/components/Button/DropdownButtonListItem'
import { IconType } from '@lyra/ui/components/Icon'
import React from 'react'

import { DISCORD_URL, DOCS_URL, GITHUB_URL, STATS_URL } from '@/app/constants/links'
import { LogEvent } from '@/app/constants/logEvents'
import logEvent from '@/app/utils/logEvent'

type Props = {
  onClose: () => void
  onClickPrivacy: () => void
}

const LayoutMoreDropdownListItems = ({ onClose, onClickPrivacy }: Props): JSX.Element => {
  return (
    <>
      <DropdownButtonListItem
        target="_blank"
        href={DOCS_URL}
        label="Docs"
        onClick={() => {
          logEvent(LogEvent.NavDocsClick)
          onClose()
        }}
        icon={IconType.Book}
      />
      <DropdownButtonListItem
        target="_blank"
        href={GITHUB_URL}
        label="GitHub"
        onClick={() => {
          logEvent(LogEvent.NavGithubClick)
          onClose()
        }}
        icon={IconType.GitHub}
      />
      <DropdownButtonListItem
        target="_blank"
        href={DISCORD_URL}
        label="Discord"
        onClick={() => {
          logEvent(LogEvent.NavDiscordClick)
          onClose()
        }}
        icon={IconType.Discord}
      />
      <DropdownButtonListItem
        target="_blank"
        href={STATS_URL}
        label="Stats"
        onClick={() => {
          logEvent(LogEvent.NavStatsClick)
          onClose()
        }}
        icon={IconType.BarChart}
      />
      <DropdownButtonListItem
        onClick={() => {
          onClickPrivacy()
          onClose()
        }}
        label="Privacy"
        icon={IconType.FileText}
      />
      {process.env.REACT_APP_RELEASE_TAG ? (
        <DropdownButtonListItem
          label={process.env.REACT_APP_RELEASE_TAG.substring(0, 16)}
          icon={IconType.GitCommit}
          href={`https://github.com/lyra-finance/interface/releases/tag/${process.env.REACT_APP_RELEASE_TAG}`}
        />
      ) : null}
    </>
  )
}

export default LayoutMoreDropdownListItems
