package org.flunky.prediction.controller;

import org.flunky.prediction.service.CategoryAnalyticsService;
import org.flunky.prediction.service.CustomerCategoryService;
import org.flunky.prediction.service.DepartmentStoreService;
import org.flunky.prediction.service.RetailerAnalyticsService;
import org.flunky.prediction.utils.FlunkyUtils;
import org.flunky.prediction.utils.JsonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by AdrianIonita on 10/10/2017.
 */
@Controller
public class FlunkyController {
    @Autowired
    private CustomerCategoryService customerCategoryService;

    @Autowired
    private DepartmentStoreService departmentStoreService;

    @Autowired
    private CategoryAnalyticsService categoryAnalyticsService;

    @Autowired
    private RetailerAnalyticsService retailerAnalyticsService;

    @RequestMapping(value = "/getCustomerCategories", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getCustomerCategories(){
        return JsonResponse.forSuccess(customerCategoryService.getAll());
    }

    @RequestMapping(value = "/getDepartmentStores", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getDepartmentStores(){
        return JsonResponse.forSuccess(departmentStoreService.getAll());
    }

    @RequestMapping(value = "/getCategoryAnalytics", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getDepartmentStores(@RequestParam String categoryCode){
        return JsonResponse.forSuccess(categoryAnalyticsService.getCurrentCategoryAnalytics(categoryCode, FlunkyUtils.getCurrentDate()));
    }

    @RequestMapping(value = "/getBasketSize", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getBasketSize(@RequestParam String categoryCode){
        return JsonResponse.forSuccess(categoryAnalyticsService.getBasketSizeTrend(categoryCode));
    }
    @RequestMapping(value = "/getRetailerAnalytics", method = RequestMethod.GET)
    public @ResponseBody
    JsonResponse getRetailerAnalytics(@RequestParam String retailerCode){
        return JsonResponse.forSuccess(retailerAnalyticsService.getCurrentRetailerAnalytics(retailerCode, FlunkyUtils.getCurrentDate()));
    }
}
