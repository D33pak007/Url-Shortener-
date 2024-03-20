"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const url_module_1 = require("./url/url.module");
const auth_module_1 = require("./auth/auth.module");
const redis_module_1 = require("./redis/redis.module");
const rate_limit_module_1 = require("./rate-limit/rate-limit.module");
const analytics_module_1 = require("./analytics/analytics.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://dkgupta250503:5vt8zUJO6eWQkHsv@cluster0.qwmxa20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            url_module_1.UrlModule,
            auth_module_1.AuthModule,
            redis_module_1.RedisModule,
            rate_limit_module_1.RateLimitModule,
            analytics_module_1.AnalyticsModule,
            jwt_1.JwtModule.register({
                secret: 'your-secret-key',
                signOptions: { expiresIn: '3600s' },
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map