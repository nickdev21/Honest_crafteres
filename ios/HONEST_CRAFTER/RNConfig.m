//
//  RNConfig.m
//  HONEST_CRAFTER
//
//  Created by Developer on 16/11/22.
//

#import "RNConfig.h"

@implementation RNConfig
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env = @"dev";
#elif STAGING
  NSString *env = @"staging";
#else
  NSString *env = @"prod";
#endif
  
 return @{ @"env": env };
}

+(BOOL)requiresMainQueueSetup{
  return YES;
}
@end
