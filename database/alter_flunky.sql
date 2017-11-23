create table xxflk_customer_categories (id integer not null ,
code varchar(200) not null,
description varchar(600),
data_in datetime,
data_out datetime,
creation_date datetime,
created_by varchar(200),
last_update_date timestamp,
last_updated_by varchar(200),
primary key flk_catid_pk (id),
unique key flk_catcd_pk (code));
drop table if exists xxflk_department_stores;
create table xxflk_department_stores (id integer not null ,
code varchar(200) not null,
description varchar(600),
category_code varchar(200),
subcategory_code varchar(200),
data_in datetime,
data_out datetime,
creation_date datetime,
created_by varchar(200),
last_update_date timestamp,
last_updated_by varchar(200),
primary key flk_storeid_pk (id),
unique key flk_storecd_pk (code));

drop table if exists xxflk_category_analytics;
create table xxflk_category_analytics(
    id integer not null,
    day_date date,
    category_code varchar(200),
    total_exp numeric,
    avg_basket_size numeric,
    clients_nr numeric,
    client_perc numeric,
    top_player_1 varchar(200),
    top_player_1_value numeric,
    top_player_2 varchar(200),
    top_player_2_value numeric,
    top_player_3 varchar(200),
    top_player_3_value numeric,
    related_category varchar(4000),
    last_update_date timestamp,
    primary key flk_cat_an_id_pk (id),
    unique key flk_cat_an_uk (category_code, day_date),
    constraint flk_cat_cd_fk foreign key (category_code) references xxflk_customer_categories(code)
);

create table xxflk_retailer_analytics(
    id integer not null,
    day_date date,
    department_store varchar(200),
    department_subcategory varchar(200),
    share_perc numeric,
    tx_value numeric,
    clients_nr numeric,
    churn numeric,
    next_month_tx numeric,
    new_customers numeric,
    next_year_tx numeric,
    last_update_date timestamp,
    primary key flk_ret_an_id_pk (id)
);

