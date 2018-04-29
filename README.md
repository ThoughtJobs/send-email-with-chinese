# send-email-with-chinese

This code base is used to send email to selected users via NodeMailer package.

Steps:
1. run `npm install` to install all dependencies.
2. run `node selecteTargetUsers.js` to select target users from `git-items.json`. This step will save target users in `selected-items.json` file
3. run `bash go.sh` to send email to selected users generated in step 2 as a background job
4. check logs generated in logs/sendEmail.log for detail
