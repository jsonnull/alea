// @flow
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog,
  faCube,
  faMapMarker,
  faUser,
  faThumbtack,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

export const SettingsIcon = () => <FontAwesomeIcon icon={faCog} />

export const RollIcon = () => <FontAwesomeIcon icon={faCube} />

// Sidebar Icons
export const SessionIcon = () => <FontAwesomeIcon icon={faMapMarker} />
export const CharacterIcon = () => <FontAwesomeIcon icon={faUser} />

export const PinIcon = () => (
  <FontAwesomeIcon icon={faThumbtack} transform={{ rotate: 45 }} />
)
export const UnpinIcon = () => <FontAwesomeIcon icon={faChevronLeft} />
