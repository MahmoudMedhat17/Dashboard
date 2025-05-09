import Billing from "../components/settings/Billing";
import ConnectedApps from "../components/settings/ConnectedApps";
import Dangerzone from "../components/settings/Dangerzone";
import Language from "../components/settings/Language";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";


const Settings = () => {
  return (
    <div className="space-y-4">
      <Profile/>
      <Notifications/>
      <Security/>
      <Language/>
      <Billing/>
      <ConnectedApps/>
      <Dangerzone/>
    </div>
  )
}

export default Settings;