ROE - Remote Order Entry Tool
=========

##Description

Scotts Miracle-Gro BT/ SalesSupport team is replacing its existing “Remote Order Entry Tool” for North America - National Sales Accounts.

ROE is the internal project name for the next generation of an internal order entry tool,
Several years ago, an employee at SMG built an app using legacy ms-access databse for the sales team to remotely enter orders in stores and from Trades hows .
Much has changed since then, and it's time to replatform in order to better meet business needs from the ground up.

##Goals of this Project

1. Offline - Build an app that works offline 100% of the the time.
2. Laying a Platform Foundation - Build a multi-use platform (Windows / Mac / Chrome book).
3. Integrate Virtual Booth 3D Models of products.
4. Integrate Account business planning (AdFund accural and Claim)

## Documentation
We've been using [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/1575067) to track progress and document work.


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://<<user_name>>@bitbucket.org/scotts-ondemand/roe.git
# Go into the repository
cd roe-electron
# Install dependencies and run the app
npm install
# Install bower globally
npm install -g bower
# Install typings
typings install
# Run roe application
npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### Domain
Request SSL certificates for
https://roe.smg-apps.com

1. Create NGINX proxy
2. Create Container VM with CouchDB instance.

##Additional Information -
If you have any question or need clarification contact: Ask-ROE@scotts.com
