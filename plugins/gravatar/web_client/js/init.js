girder.exposePluginConfig('gravatar', 'plugins/gravatar/config');

girder.models.UserModel.prototype.getGravatarUrl = function (size) {
    size = size || 64;

    var baseUrl = this.get('gravatar_baseUrl');
    if (baseUrl) {
        return baseUrl;
    } else {
        return girder.apiRoot + '/user/' + this.get('_id') +
            '/gravatar?size=' + size;
    }
};
