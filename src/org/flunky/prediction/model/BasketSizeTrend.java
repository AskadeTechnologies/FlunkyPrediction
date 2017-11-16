package org.flunky.prediction.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "xxflk_basket_trend")
@JsonIgnoreProperties(ignoreUnknown = true)
public class BasketSizeTrend {
    private String year;
    private String month;
    private String categoryCode;
    private BigDecimal basketSize;

    public BasketSizeTrend() {
    }

    @Column(name = "year")

    public String getYear() {
        return year;
    }
    @Column(name = "month")
    @Id
    public String getMonth() {
        return month;
    }
    @Column(name = "category_code")
    public String getCategoryCode() {
        return categoryCode;
    }
    @Column(name = "basket_size", columnDefinition="Decimal(19,2)")
    public BigDecimal getBasketSize() {
        return basketSize;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public void setCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
    }

    public void setBasketSize(BigDecimal basketSize) {
        this.basketSize = basketSize;
    }

    @Override
    public String toString() {
        return "BasketSizeTrend{" +
                "year='" + year + '\'' +
                ", month='" + month + '\'' +
                ", categoryCode='" + categoryCode + '\'' +
                ", basketSize=" + basketSize +
                '}';
    }
}
