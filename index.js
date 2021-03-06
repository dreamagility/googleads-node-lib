module.exports = {
  // Reports
  AccountPerformanceReport: require('./reports/accountPerformanceReport'),
  AdCustomizersFeedItemReport: null,
  AdGroupPerformanceReport: require('./reports/adGroupPerformanceReport'),
  AdPerformanceReport: null,
  AgeRangePerformanceReport: null,
  AudiencePerformanceReport: null,
  AutomaticPlacementsPerformanceReport: null,
  BidGoalPerformanceReport: null,
  BudgetPerformanceReport: null,
  CallMetricsCallDetailsReport: null,
  CampaignAdScheduleTargetReport: null,
  CampaignLocationTargetReport: null,
  CampaignNegativeKeywordsPerformanceReport: null,
  CampaignNegativeLocationsReport: null,
  CampaignNegativePlacementsPerformanceReport: null,
  CampaignPerformanceReport: require('./reports/campaignPerformanceReport'),
  CampaignPlatformTargetReport: null,
  CampaignSharedSetReport: null,
  ClickPerformanceReport: null,
  CreativeConversionReport: null,
  CriteriaPerformanceReport: null,
  DestinationURLReport: null,
  DisplayKeywordPerformanceReport: null,
  DisplayTopicsPerformanceReport: null,
  FinalURLReport: null,
  GenderPerformanceReport: null,
  GeoPerformanceReport: null,
  KeywordlessCategoryReport: null,
  KeywordlessQueryReport: null,
  KeywordsPerformanceLabelReport: null,
  PaidAndOrganicQueryReport: null,
  PlaceholderReport: null,
  PlaceholderFeedItemReport: null,
  PlacementPerformanceReport: null,
  ProductPartitionReport: null,
  SearchQueryPerformanceReport: null,
  SharedSetReport: null,
  SharedSetCriteriaReport: null,
  ShoppingPerformanceReport: null,
  URLPerformanceReport: null,
  UserAdDistanceReport: null,
  VideoPerformanceReport: null,

  // Services
  // Campaign data management
  AdGroupAdService: require('./services/adGroupAdService'),
  AdGroupCriterionService: require('./services/adGroupCriterionService'),
  AdGroupFeedService: null,
  AdGroupService: require('./services/adGroupService'),
  AdwordsUserListService: null,
  BudgetService: require('./services/budgetService'),
  CampaignCriterionService: require('./services/campaignCriterionService'),
  CampaignExtensionSettingService: null,
  CampaignFeedService: null,
  CampaignService: require('./services/campaignService'),
  ConversionTrackerService: null,
  DataService: null,
  FeedItemService: null,
  FeedItemTargetService: null,
  FeedMappingService: null,
  FeedService: require('./services/feedService'),
  OfflineConversionFeedService: require('./services/offlineConversionFeedService'),

  // Optimization
  ExperimentService: null,
  ReportDefinitionService: require('./services/reportDefinitionService'),
  TargetingIdeaService: require('./services/targetingIdeaService'),
  TrafficEstimatorService: require('./services/trafficEstimatorService'),

  // Account management
  CustomerService: require('./services/customerService'),
  CustomerSyncService: require('./services/customerSyncService'),
  ManagedCustomerService: require('./services/managedCustomerService'),

  // Utility
  BatchJobService: null,
  GeoLocationService: null,
  MediaService: null,
  ConstantDataService: require('./services/constantDataService'),
  LocationCriterionService: null,

  // Other (not categorized by AdWords)
  AccountLabelService: require('./services/accountLabelService'),
  AdCustomizerFeedService: null,
  AdGroupBidModifierService: null,
  AdGroupExtensionSettingService: null,
  AdParamService: null,
  CustomerFeedService: null,
  LabelService: null,
  MutateJobService: null,
  SharedCriterionService: null,
  SharedSetService: null,
  BiddingStrategyService: require('./services/biddingStrategyService'),
  Selector: require('./types/selector'),
  printMsg: function() {console.log('UNDER DEVELOPMENT!  Use with caution.');}
};
