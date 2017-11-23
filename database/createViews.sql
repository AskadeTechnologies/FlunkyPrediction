--create view xxflk_basket_trend as
SELECT
    date_format(flunky.xxflk_category_analytics.day_date,'%Y') AS year,
    date_format(flunky.xxflk_category_analytics.day_date,'%M') AS month,
    flunky.xxflk_category_analytics.category_code AS category_code,
    SUM(flunky.xxflk_category_analytics.avg_basket_size) AS basket_size
FROM
    flunky.xxflk_category_analytics
GROUP BY
    date_format(flunky.xxflk_category_analytics.day_date,'%Y'),
    date_format(flunky.xxflk_category_analytics.day_date,'%Y%M'),
    flunky.xxflk_category_analytics.category_code;