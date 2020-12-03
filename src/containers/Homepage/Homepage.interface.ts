export interface HomepageProps {
  isLoading: boolean;
  driversError: string,
  driversChatError: string,
  fetchDriversData: () => void,
  fetchDriverChatData: () => void
}
