/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
(function () {
    angular.module('piwikApp').run(['$timeout', function($timeout) {
        var isIe = detectIfIeIsBeingUsed();
        if (isIe) {
            $timeout(function () {
                var UI = require('piwik/UI');
                var notification = new UI.Notification();

                var message = _pk_translate('CoreHome_TechDeprecationWarning', [
                    '4.6',
                    'Internet Explorer',
                    '<a target="_blank" href="https://matomo.org/blog/2021/09/matomo-to-end-support-for-internet-explorer-11/" rel="noreferrer noopener">',
                    '</a>',
                ]);

                notification.show(message, {
                    title: _pk_translate('General_Warning') + ':',
                    context: 'warning',
                    noclear: true,
                    type: 'persistent',
                    id: 'ieEndingSupportCheck'
                });
            });
        }

        function detectIfIeIsBeingUsed() {
            var ua = window.navigator.userAgent;
            return ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1;
        }
    }]);
})();
