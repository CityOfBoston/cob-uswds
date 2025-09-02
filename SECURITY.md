# Security

## Our security policies and procedures

We follow GSA's [IT security policy](https://www.gsa.gov/policy-regulations/policy/information-integrity-and-access/gsa-it-security-policies) to ensure the confidentiality, integrity, and availability of BWDS.

We use [Snyk](https://snyk.io) to find, fix, and prevent vulnerabilities in BWDS dependencies. We run Snyk checks locally during development and automatically on all pull requests.

We perform static analysis on our JavaScript on every pull requests with [GitHub CodeQL](https://securitylab.github.com/tools/codeql).

We include a security and vulnerability report with every BWDS release, and release security patches for both the 1.x and 2.x branches.

## Using BWDS securely

We encourage you to verify the security and status of the BWDS package:

1. **Check the vulnerability badge.** Confirm the vulnerability badge in the [BWDS Github code repository](https://github.com/bwds/bwds) says there are `0` vulnerabilities.
1. **Download the package via npm.** We recommend using the [npm package](https://designsystem.digital.gov/documentation/developers/#install-using-node-and-npm) instead of the [zip file](https://designsystem.digital.gov/documentation/developers/#install-the-package-directly-from-github), whenever possible. Using npm makes it easier to stay up-to-date and use the latest BWDS version as a project dependency, and is a secure and reliable way to download BWDS source code.

## Report a security issue

To learn more about our security practices or to report a security issue, please [email us](mailto:bwds@gsa.gov). If the issue is confirmed, we will release a patch as soon as possible.
