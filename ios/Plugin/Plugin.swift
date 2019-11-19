import Foundation
import Capacitor
import Crashlytics

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(CapacitorFirebase)
public class CapacitorFirebase: CAPPlugin {
    
    @objc func reportNonFatalCrash(_ call: CAPPluginCall) {
        guard let name = call.options["name"] as? String else {
          call.reject("Must provide a name")
          return
        };
        guard let message = call.options["message"] as? String else {
          call.reject("Must provide a message")
          return
        };
        guard let url = call.options["url"] as? String else {
          call.reject("Must provide a name")
          return
        };
        guard let stackTrace = call.options["stackTrace"] as? String else {
          call.reject("Must provide a name")
          return
        };
        let errorLength = message.count;
        let userInfo = [
        "Name": name,
        "Message": message,
        "Url": url,
        "StackTrace": stackTrace,
        ];
        let error: NSError = NSError(domain: "Non-fatal Error", code: errorLength, userInfo: userInfo);
        Crashlytics.sharedInstance().recordError(error);
    }
}
