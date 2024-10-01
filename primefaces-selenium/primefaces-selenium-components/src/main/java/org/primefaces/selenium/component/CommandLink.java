/*
 * The MIT License
 *
 * Copyright (c) 2009-2024 PrimeTek Informatics
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.primefaces.selenium.component;

import org.primefaces.selenium.PrimeExpectedConditions;
import org.primefaces.selenium.PrimeSelenium;
import org.primefaces.selenium.component.html.Link;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Component wrapper for the PrimeFaces {@code p:commandLink}.
 */
public abstract class CommandLink extends Link {

    @Override
    public void click() {
        WebElement link = getRoot();
        PrimeSelenium.waitGui().until(PrimeExpectedConditions.visibleAndAnimationComplete(link));
        PrimeSelenium.waitGui().until(ExpectedConditions.elementToBeClickable(link));

        if (link.getAttribute("data-pfconfirmcommand") != null) {
            // Confirm Dialog/Popup we don't want to guard for AJAX
        }
        else if (isAjaxified("onclick")) {
            link = PrimeSelenium.guardAjax(link);
        }
        else if ("_blank".equals(link.getAttribute("target"))) {
            link = PrimeSelenium.guardHttp(link);
        }

        link.click();
    }

    /**
     * #8840 Some scenario's with ajax="false" like in a download you may not want to guard the click.
     */
    public void clickUnguarded() {
        WebElement link = getRoot();
        PrimeSelenium.waitGui().until(ExpectedConditions.elementToBeClickable(link));
        link.click();
    }
}
