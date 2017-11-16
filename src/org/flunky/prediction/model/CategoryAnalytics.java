package org.flunky.prediction.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.flunky.prediction.utils.FlunkyUtils;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "xxflk_category_analytics")
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoryAnalytics {

    private Integer id;
    private Date dayDate;
    private String categoryCode;
    private BigDecimal totalExp;
    private BigDecimal avgBasketSize;
    private BigDecimal clientsNr;
    private BigDecimal clientPerc;
    private Date lastUpdateDate;
    private String topPlayer1;
    private BigDecimal topPlayer1Value;
    private String topPlayer2;
    private BigDecimal topPlayer2Value;
    private String topPlayer3;
    private BigDecimal topPlayer3Value;

    public CategoryAnalytics() {
    }
    @Id
    @Column(name = "id")
    public Integer getId() {
        return id;
    }
    @Column(name = "day_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone= FlunkyUtils.BUCHAREST_TIME_ZONE)
    public Date getDayDate() {
        return dayDate;
    }
    @Column(name = "category_code")
    public String getCategoryCode() {
        return categoryCode;
    }
    @Column(name = "total_exp", columnDefinition="Decimal(19,2)")
    public BigDecimal getTotalExp() {
        return totalExp;
    }
    @Column(name = "avg_basket_size", columnDefinition="Decimal(19,2)" )
    public BigDecimal getAvgBasketSize() {
        return avgBasketSize;
    }
    @Column(name = "clients_nr", columnDefinition="Decimal(19,2)")
    public BigDecimal getClientsNr() {
        return clientsNr;
    }
    @Column(name = "client_perc", columnDefinition="Decimal(19,2)")
    public BigDecimal getClientPerc() {
        return clientPerc;
    }
    @Column(name = "last_update_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone= FlunkyUtils.BUCHAREST_TIME_ZONE)
    public Date getLastUpdateDate() {
        return lastUpdateDate;
    }
    @Column(name = "top_player_1")
    public String getTopPlayer1() {
        return topPlayer1;
    }
    @Column(name = "top_player_1_value", columnDefinition="Decimal(19,2)")
    public BigDecimal getTopPlayer1Value() {
        return topPlayer1Value;
    }
    @Column(name = "top_player_2")
    public String getTopPlayer2() {
        return topPlayer2;
    }
    @Column(name = "top_player_2_value", columnDefinition="Decimal(19,2)")
    public BigDecimal getTopPlayer2Value() {
        return topPlayer2Value;
    }
    @Column(name = "top_player_3")
    public String getTopPlayer3() {
        return topPlayer3;
    }
    @Column(name = "top_player_3_value", columnDefinition="Decimal(19,2)")
    public BigDecimal getTopPlayer3Value() {
        return topPlayer3Value;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDayDate(Date dayDate) {
        this.dayDate = dayDate;
    }

    public void setCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
    }

    public void setTotalExp(BigDecimal totalExp) {
        this.totalExp = totalExp;
    }

    public void setAvgBasketSize(BigDecimal avgBasketSize) {
        this.avgBasketSize = avgBasketSize;
    }

    public void setClientsNr(BigDecimal clientsNr) {
        this.clientsNr = clientsNr;
    }

    public void setClientPerc(BigDecimal clientPerc) {
        this.clientPerc = clientPerc;
    }

    public void setLastUpdateDate(Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    public void setTopPlayer1(String topPlayer1) {
        this.topPlayer1 = topPlayer1;
    }

    public void setTopPlayer1Value(BigDecimal topPlayer1Value) {
        this.topPlayer1Value = topPlayer1Value;
    }

    public void setTopPlayer2(String topPlayer2) {
        this.topPlayer2 = topPlayer2;
    }

    public void setTopPlayer2Value(BigDecimal topPlayer2Value) {
        this.topPlayer2Value = topPlayer2Value;
    }

    public void setTopPlayer3(String topPlayer3) {
        this.topPlayer3 = topPlayer3;
    }

    public void setTopPlayer3Value(BigDecimal topPlayer3Value) {
        this.topPlayer3Value = topPlayer3Value;
    }

    @Override
    public String toString() {
        return "CategoryAnalytics{" +
                "id=" + id +
                ", dayDate=" + dayDate +
                ", categoryCode='" + categoryCode + '\'' +
                ", totalExp=" + totalExp +
                ", avgBasketSize=" + avgBasketSize +
                ", clientsNr=" + clientsNr +
                ", clientPerc=" + clientPerc +
                ", lastUpdateDate=" + lastUpdateDate +
                ", topPlayer1='" + topPlayer1 + '\'' +
                ", topPlayer1Value=" + topPlayer1Value +
                ", topPlayer2='" + topPlayer2 + '\'' +
                ", topPlayer2Value=" + topPlayer2Value +
                ", topPlayer3='" + topPlayer3 + '\'' +
                ", topPlayer3Value=" + topPlayer3Value +
                '}';
    }
}
