import Billing from "../components/settings/Billing.tsx";
import ConnectedApps from "../components/settings/ConnectedApps.tsx";
import Dangerzone from "../components/settings/Dangerzone.tsx";
import Language from "../components/settings/Language.tsx";
import Notifications from "../components/settings/Notifications.tsx";
import Profile from "../components/settings/Profile.tsx";
import Security from "../components/settings/Security.tsx";


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